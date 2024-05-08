$(document).ready(function() {
    $('#tarefa-form').submit(function(event) {
        event.preventDefault();
        var nomeTarefa = $('#nome-tarefa').val();
        if (nomeTarefa.trim() !== '') {
            var listItem = $('<li><span class="tarefa-texto">' + nomeTarefa + '</span></li>');
            var botoesContainer = $('<div class="botoes-container"></div>');
            var concluidoButton = $('<button class="concluir-tarefa btn-concluir">Concluir</button>');

            listItem.append(botoesContainer);
            botoesContainer.append(concluidoButton);
            $('#itens').append(listItem);
            $('#nome-tarefa').val('');
        }
    });

    $('#itens').on('click', '.concluir-tarefa', function() {
        var textoTarefa = $(this).closest('li').find('.tarefa-texto');
        textoTarefa.toggleClass('tarefa-concluida');
    });

});
