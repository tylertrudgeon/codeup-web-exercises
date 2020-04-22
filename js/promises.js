"use strict";





function latestCommit (userName) {
    let url = `https://api.github.com/users/${userName}/events/public`;
    const githubPromise = fetch(url, {headers: {'Authorization': GITHUB_KEY}});
    githubPromise.then(response => response.json()
        .then(user => {
            for(let data of user) {
                let date = data.created_at;
                document.body.innerHTML =`Latest commit was: ${date}`;
                break;
            }
        })
    );
}

latestCommit('tylertrudgeon');

function wait (num) {
    return new Promise((resolve) => {
        let newNum = num * 1000;
        setTimeout(() => {
            resolve('You\'ll see this after '+num+' seconds.')
        }, newNum);
    })

}

const chooseHowLongToWait = wait(5);
console.log(chooseHowLongToWait);

chooseHowLongToWait.then(() => console.log('You\'ll see this after seconds'));
