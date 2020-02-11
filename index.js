$(function() {
  

  function shoppingListItem(item){
    return `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
    </div>
    </li>`}


    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const item = $('#shopping-list-entry').val();
      console.log(item);
  
      $('.shopping-list').append($(shoppingListItem(item)));
      $('#shopping-list-entry').val('');
       
            
      });
  
    
    $('.shopping-item-toggle').on('click', function(event) {
      $(event.currentTarget).parentsUntil('li').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });

    
    $('.shopping-item-delete').on('click', function(event) {
      $(event.currentTarget).parentsUntil('ul').remove();
    });





});