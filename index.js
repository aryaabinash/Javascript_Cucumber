var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber-report.json',
        output: 'reports/cucumber-report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"Data3Sixty Analyze v3.5.0.1",
            "Test Environment": "BDD Cucumber - UI test",
            "Browser": "Chrome 78.0.3904.97",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);