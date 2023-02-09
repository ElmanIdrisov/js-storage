// * LocalStorage, SessionStorage
// * setItem(key, value) - cохранить пару ключ/значение
// * getItem(key) - получить данные по ключу key.
// * removeItem(key) - удалить данные с ключом key.
// * key(index) - получить ключ на заданной позиции.
// * length - количество элементов в хранилище.
// * window.onstorage


const inputName = document.querySelector('input[placeholder="Name"]');
const inputAddress = document.querySelector('input[placeholder="Address"]');
const inputPassword = document.querySelector('input[placeholder="Password"]');
const saveButton = document.querySelector('.save');

const userData = JSON.parse(localStorage.getItem('user.data'));

if(userData){
    inputName.value = userData.name;
    inputAddress.value = userData.address;
    inputPassword.value = userData.password
}

saveButton.addEventListener('click', () => {
    const data = {
        name: inputName.value,
        address: inputAddress.value,
        password: inputPassword.value  
    }

    localStorage.setItem('user.data', JSON.stringify(data))
})



















/* localStorage.clear();

const tokenId = Math.round(Math.random() * 100_000_000)

localStorage.setItem('isBanned', false);

 */
 







 /* localStorage.setItem('name2', 'Alisa')
 localStorage.setItem('name3', 'Alex')
 localStorage.setItem('name4', 'Max')
 localStorage.setItem('name5', 'Vlad') */



/*  for(index in localStorage) {
    console.log('index', localStorage[index]);
}  */

/* const getToken = localStorage.getItem('tokenId')

console.log('getToken' , getToken);
localStorage.removeItem('tokenId'); */