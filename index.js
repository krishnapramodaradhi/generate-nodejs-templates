#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');

const cdc = require('./createDirectoryContents');

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
    {
        name: 'template-choice',
        type: 'list',
        message: 'Choose your template',
        choices: CHOICES
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project name: ',
        validate: input => {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
            else return 'Project name may only include letters, numbers, underscores and hashes'
        }
    }
]

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then(answers => {
    const templateChoice = answers['template-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${templateChoice}`;

    fs.mkdirSync(`${CURR_DIR}/${projectName}`);

    cdc.createDirectoryContents(templatePath, projectName);
}).catch(err => console.log(err));