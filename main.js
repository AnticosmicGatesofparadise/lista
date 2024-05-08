$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })


    $('form').on('submit', function(e){
        e.preventDefault();
        const nova = $('#nova-tarefa').val();
        const Item = $('<li></li>');

        const tarefaText = document.createTextNode(nova);
        Item.append(tarefaText);
        Item.text(`${nova}`);

        $('ul').append(Item);
    
        $(document).ready(function() {
            $('li').click(function() {
            $(this).css('text-decoration', 'line-through');
            });
        });    
    });
});