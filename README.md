echo "# body" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/kwokhung/body.git
git push -u origin master

tsc --init
npm init -y
npm install @types/node --save-dev
npm install mqtt --save
npm install @types/mqtt --save-dev