window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let classes = {
            parentClass: '.info-header',
            tabClass: '.info-header-tab',
            tabContentClass: '.info-tabcontent'
    }

    let initTabs = function(){
        let parent = document.querySelector(classes.parentClass),
            tabs = document.querySelectorAll(classes.tabClass),
            tabCont = document.querySelectorAll(classes.tabContentClass);
             
        let hideContent = function(a){
            for(let i = a; i<tabCont.length; i++){
                tabCont[i].style.display = 'none';
            }
        }

        hideContent(1);

        let showContent = function(b){
            hideContent(0);
            if (tabCont[b].style.display == 'none'){
            tabCont[b].style.display = 'flex';
            }
        }

        parent.addEventListener('click', function(event){   
            let target = event.target;
            if(target && target.classList.contains('info-header-tab')){
                for(let i = 0; i < tabs.length; i++){
                    if(tabs[i] == target){
                        hideContent(0);
                        showContent(i);
                        break;
                    }
                }
            }       
        })  
    }
    initTabs();
});