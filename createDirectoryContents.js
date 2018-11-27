const fs = require('fs');

const createDirectoryContents = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.map(file => {
    const origFilePath = `${templatePath}/${file}`;

    const stats = fs.statSync(origFilePath);

    if (stats.isDirectory()) {
      fs.mkdirSync(`${process.cwd()}/${newProjectPath}/${file}`);

      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    } else if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      const writePath = `${process.cwd()}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    }
  });
};

module.exports = {
  createDirectoryContents
};
