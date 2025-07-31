const products = 'Books';
const ages = [33, 45, 35, 11, 44, 11, 23, 33];
console.log(ages.length);


if (Array.isArray(ages && products)){
    console.log('Yes These Are All Arreys Elements.')
}
else if (Array.isArray(ages || products)){
    console.log('Yes One Of The Variable Has Array Elements')
}
else{
    console.log('No These Are Not Array Elements')
}