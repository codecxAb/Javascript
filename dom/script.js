let head1 = document.getElementById('h1');

let para1 = document.getElementById('para1');
function changeP(){
    para1.innerHTML = "This is a new paragraph";
}

document.getElementById('highlight').addEventListener('click', function(){
    let item1 = document.getElementById('cities').firstElementChild;
    item1.style.backgroundColor = 'yellow';
    item1.style.fontWeight = 'bold';

});

document.getElementById('change_order').addEventListener('click', function(){
    let order = document.getElementById('order_item');
    order.textContent = "espresso";

});

document.getElementById('add-item').addEventListener('click', function(){
    let item = document.createElement('li');
    item.textContent = "orange";
    document.getElementById('shopping-list').appendChild(item);
});
document.getElementById('remove-item').addEventListener('click', function(){
    let item = document.getElementById('shopping-list').lastElementChild;
    item.remove();
});
