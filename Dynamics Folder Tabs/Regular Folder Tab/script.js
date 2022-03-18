//selecting all buttons and panels to be changed
var tabButtons=document.querySelectorAll(".buttonContainer button");
var tabPanels=document.querySelectorAll(".tabPanel");

//function showPanel:
//  1. Change default display of each button and each panel to none
//  2. Change specified button and panel to its designated color
function showPanel(panelIndex,colorCode) {
    //select button using foreach loop
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    //select panel using foreach loop
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    //styles specific button and panel
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'lightblue');