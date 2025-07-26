    $(document).ready(function(){
    $('form').on('submit', function(e) {
    e.preventDefault()
    const nomeTarefa = $('#nome-tarefa').val()
    const novoItem = $('<li></li>')
    $(`<li> ${nomeTarefa} </li>`).appendTo(novoItem)

    $(novoItem).appendTo('ul')

    $('#nome-tarefa').val('')

    $('li').click (function(){
        $('li').css('text-decoration', 'line-through');
    })

    $('li').mouseover (function(){
        $('li').css('cursor', 'pointer');
    })

})
})