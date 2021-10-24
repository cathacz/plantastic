# plantasitc

A gardening Diary
igal test tets

Here comes the README

# THE README comes from here

## Know-How Plantastic Project

### GitHub Workflow

1. Create a repo on GH

   - Create a directory which has exactly the same name.
   - Go to that directory.

   ```
   cd test
   echo "# plantastic" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/profilename/test.git
   git push -u origin main
   ```

2. Create a parallel branch and check the status of branches. Is it up to date? What changes are staged for that branch? Display all branches, and show which is your current.

   ```
   git checkout
   git status
   git branch
   ```

3. Create another branch and set upstream - another branch with remote tracking, associated with local branch

```
git checkout newbranch
git push --set-upstream origin newbranch
git add .
git commit -m "your branch"
```

4. after completing some changes, push them to the current branch and switch to the main.

   ```
   git push
   git checkout main
   ```

5. Update the main

   ```
   git pull
   git add .
   git commit -m "update to the main"
   ```

6. Switch to the newbranch and merge it with updated main

   ```
   git checkout newbranch
   git merge main newbranch
   git add .
   git commit -m "update from the main"
   ```

By this way your branch will get all the changes that were made to the main.

In order to merge changes from the other branch to the main, make sure that those changes are what you would like to introduce and there will be least conflicts possible.

    ```
    git checkout main
    git merge newbranch main
    git add .
    git commit -m "update from the newbranch"
    ```

### Expo

> .expo folder

The ".expo" folder is created when an Expo project is started using "expo start" command.
Don't share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine. Upon new project creation, the ".expo" folder is already added to your ".gitignore" file.

> packager-info.json

The "packager-info.json" file contains port numbers and process PIDs that are used to serve the application to the mobile device/simulator.

> settings.json" file contain?

The "settings.json" file contains the server configuration that is used to serve the application manifest.

> Should I commit the ".expo" folder?
