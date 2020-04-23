"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const userLanguages = users.filter(user => user.languages.length >= 3);
console.log(userLanguages);

const emailAddresses = users.map(user => user.email);
console.log(emailAddresses);

const experience = users.map(user => user.yearsOfExperience);
console.log(experience);

const userYearsOfExperience = experience.reduce((total, yearsOfExperience) => total + yearsOfExperience , 0);
console.log(userYearsOfExperience/experience.length);

const longestEmail = users.reduce((emailLength, email) =>  , 0)
