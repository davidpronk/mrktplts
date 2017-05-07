// ==UserScript==
// @name        mrktplts
// @namespace   nl.davidpronk.mrktplts
// @description Remove commercial offers from Marktplaats search results
// @include     https://www.marktplaats.nl/*
// @grant       none
// @version     0.3
// ==/UserScript==

(function() {
    'use strict';

        var locations = document.querySelectorAll( '.location-name' );

        for( var x=0 ; x< locations.length ; x++ ){

            var node = locations[x];
            var nodeContent = node.innerText;

            if( nodeContent.indexOf( 'Bezorgt' ) !== -1 ){

                var parents = getParents( node, '.search-result' );

                for( var y=0 ; y< parents.length ; y++ ){
                    var parent = parents[y];
                    parent.parentNode.removeChild( parent );
                }

            }

        }



        // Based on a script from http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/

        /**
         * Get all DOM element up the tree that contain a class
         * @param  {Node} elem The base element
         * @param  {String} selector The class, id, data attribute, or tag to look for
         * @return {Array} Null if no match
         */
        function getParents(elem, selector) {

            var parents = [];
            if ( selector ) {
                var firstChar = selector.charAt(0);
            }

            // Get matches
            for ( ; elem && elem !== document; elem = elem.parentNode ) {
                if ( selector ) {

                    // If selector is a class
                    if ( firstChar === '.' ) {
                        if ( elem.classList.contains( selector.substr(1) ) ) {
                            parents.push( elem );
                        }
                    }

                } else {
                    parents.push( elem );
                }
            }

            // Return parents if any exist
            if ( parents.length === 0 ) {
                return null;
            } else {
                return parents;
            }

        };

})();
