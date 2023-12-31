#!/bin/bash

timestamp() {
  date +"%Y-%m-%d"
}

ORG=al-mabsut
REPO=muslimah
PR_URL=https://github.com/$ORG/$REPO/pull/
ts=$(timestamp)
branchName="combine-all-dependabot-prs-$ts-$((1000 + RANDOM % 9999))"

NL=$'\n'
dependabotPRs=$(gh pr list --repo $ORG/$REPO --json number,headRefName | jq -r '.[] | select(.headRefName|test("^(dependabot\/).*$"))')
dependabotPRNumbers="${NL}$(echo $dependabotPRs | jq -r '.number')"
dependabotPRLinks=${dependabotPRNumbers//${NL}/${NL}* $PR_URL}
dependabotPRBranchNames=$(echo $dependabotPRs | jq -r '.headRefName')

echo "Obtain all dependabot PR branches: \n$(gh pr list --repo $ORG/$REPO --json commits | jq -r '.[] .commits | .[] | select(.messageHeadline|test("^(Dependabot).*$")) | [.oid, .messageHeadline] | @tsv' | column -ts $'\t')"

dependabotPRBranchNames=${dependabotPRBranchNames//$'\n'/ } # Replace all newlines with spaces

echo "Checking out branch: $branchName"
git checkout -b $branchName

echo "Pull all dependabot PRs into this branch"
git pull origin $dependabotPRBranchNames --no-edit --no-rebase
git commit --amend -m "Combine all dependabot-prs until $ts

This commit combines all the following PRs: $dependabotPRLinks
"

echo "Push branch to remote"
git push origin $branchName
sleep 1

echo "Create PR"
gh pr create -f -a @me

echo "All done"

