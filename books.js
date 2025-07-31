const likedBooks = ['local-time', 'True-skills', 'Hablu-Programmers', 'Try-To-Improve', 'Javascript-Learning', 'A-Complete-Roadmap', 'Time Trap', 'Our Sociality', 'Prime World']
console.log(likedBooks.length);

// if(likedBooks.includes('Javascript-Learning')){
//     console.log('Yes We Have The Book You Want. Let Us Know If You Need One')
// }

// Javascript is case sensative So You Have To write It As It is If Not I won't Work
if(likedBooks.includes('Javascript-learning')){
    console.log('Yes We Have The Book You Want. Let Us Know If You Need One')
}
else if (likedBooks.includes('improve')){
    console.log('We Got One. Do You Need One?')
}
else{
    console.log('Sorry We Do Not Have That One. We Will Nootify You We Could Manage You One')
}