// ==UserScript==
// @name        mrktplts
// @namespace   nl.davidpronk.mrktplts
// @description Remove commercial offers from Marktplaats search results
// @include     http://www.marktplaats.nl/*
// @grant       none
// @version     0.1
// ==/UserScript==

if ( typeof jQuery !== 'undefined' ) {

    var locs = $( '.location-name' );

    for( var x=0 ; x< locs.length ; x++ ){

        var node = locs[x],
            nodeContent = $( node ).text();

        if( nodeContent.indexOf( 'Bezorgt' ) !== -1 ){
            $( node ).parents( '.search-result' ).remove();
        }

    }
}
