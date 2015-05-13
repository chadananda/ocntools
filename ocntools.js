#!/usr/bin/env node

var program = require('commander');
var request = require('request');
var chalk = require('chalk');

program
    .version('1.0.0')
    .usage('[options] <keywords>')
    .option('-o, --owner [name]', 'Filter by the repositories owner')
    .parse(process.argv);

if(!program.args.length) {
    program.help();
} else {
    var keywords = program.args;
    var url = 'https://api.github.com/search/repositories?sort=stars&order=desc&q='+keywords;
    if(program.owner) {
        url = url + '+user:' + program.owner;
    }

    request({
        method: 'GET',
        headers: {
            'User-Agent': 'chadananda'
        },
        url: url
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {

          var body = JSON.parse(body);

          for(var i = 0; i < body.items.length; i++) {
              console.log(chalk.cyan.bold.underline('Name: ' + body.items[i].name));
              console.log(chalk.magenta.bold('Owner: ' + body.items[i].owner.login));
              console.log(chalk.grey('Desc: ' + body.items[i].description + '\n'));
              console.log(chalk.grey('Clone url: ' + body.items[i].clone_url + '\n'));
          }

        } else if (error) {
            console.log('Error: ' + error);
        }
    });

}