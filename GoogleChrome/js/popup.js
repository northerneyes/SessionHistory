/**
 * Created with IntelliJ IDEA.
 * User: George
 * Date: 26.02.13
 * Time: 21:32
 * To change this template use File | Settings | File Templates.
 */
function TabsListCtrl($scope) {

    $scope.tabs = chrome.extension.getBackgroundPage().tabs;

    $scope.clearHistory = function(event){
        event.preventDefault();
        chrome.extension.sendMessage({
            messageId: 0
        });
        $scope.tabs = [];
    }
}

//$(function() {
//    // Render the template with the tabs data and insert
//    // the rendered HTML under the "tabsList" element
//  //  var tabs = chrome.extension.getBackgroundPage().tabs;
////    $(".tabs-display" ).html(
////        $( "#tabsTemplate" ).render(tabs)
////    );
//});

