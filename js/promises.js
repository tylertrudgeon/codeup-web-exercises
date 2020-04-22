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
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(num)
        }, num);
    })

}

wait(1000).then((waitedTime) => console.log(`You\'ll see this after ${waitedTime/1000} seconds`));
wait(5000).then((waitedTime) => console.log(`You\'ll see this after ${waitedTime/1000} seconds`));
