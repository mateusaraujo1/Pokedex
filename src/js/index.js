// criar duas variáveis p trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // criar evento de click na classe .listagem .pokemon e a função que o click executará
    pokemon.addEventListener('click', () => {

        //remover classe aberto só do cartão q tá aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // pegando o ID do pokemon selecionado da listagem
        const idPokemonSelecionado = pokemon.attributes.id.value

        // adicionando a classe aberto para o cartão selecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //NA LISTAGEM, remover a classe ativo que marca o pokemon selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no pokémon clicado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})