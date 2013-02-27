/**
 * Created with IntelliJ IDEA.
 * User: George
 * Date: 26.02.13
 * Time: 21:32
 * To change this template use File | Settings | File Templates.
 */

$(function() {

    // Render the template with the tabs data and insert
    // the rendered HTML under the "tabsList" element
    $(".tabs-display" ).html(
        $( "#tabsTemplate" ).render(tabs)
    );

});

//var tabs = [
//    { title: "The Red Violin", time: "1998" },
//    { title: "Eyes Wide Shut", time: "1999" },
//    { title: "The Inheritance", time: "1976" }
//];