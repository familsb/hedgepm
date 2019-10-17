// /*
//  * To change this license header, choose License Headers in Project Properties.
//  * To change this template file, choose Tools | Templates
//  * and open the template in the editor.
//  */
// module.exports = function (grunt) {
//     // Project configuration.
//     grunt.initConfig({
//         pkg: grunt.file.readJSON('package.json'),
//         dom_munger: {
//             your_target: {
//                 options: {
//                     remove: '.main-nav' //remove an element with the id of main-nav
//                 },
//                 src: [
//                     'tourism-about.html',
//                     'tourism-events.html',
//                     'tourism-faq.html',
//                     'tourism-index.html',
//                     'tourism-job-listing.html',
//                     'tourism-job-single.html',
//                     'tourism-our-history.html',
//                     'tourism-our-team.html',
//                     'tourism-partners.html',
//                     'tourism-pricings.html',
//                     'tourism-services-destination-management.html',
//                     'tourism-services-icons-grid.html',
//                     'tourism-services-image-grid-sidebar.html',
//                     'tourism-services-image-grid.html',
//                     'tourism-services-marketing.html',
//                     'tourism-services-partnership.html',
//                     'tourism-services-seminars.html',
//                     'tourism-services-single.html',
//                     'tourism-services-subcategory.html',
//                     'tourism-services-tourism-impacts.html',
//                     'tourism-services-training-and-education.html',
//                     'tourism-services-workforce-development.html',
//                     'tourism-team-ashley-valdez.html',
//                     'tourism-team-brandon-lucas.html',
//                     'tourism-team-member.html',
//                     'tourism-team-patrick-murray.html',
//                     'tourism-testimonials.html'
//                 ]
//             }
//         },
//         insert: {
//             options: {},
//             main: {
//                 src: "tourism-header.html",
//                 dest: [
//                     'tourism-about.html',
//                     'tourism-events.html',
//                     'tourism-faq.html',
//                     'tourism-index.html',
//                     'tourism-job-listing.html',
//                     'tourism-job-single.html',
//                     'tourism-our-history.html',
//                     'tourism-our-team.html',
//                     'tourism-partners.html',
//                     'tourism-pricings.html',
//                     'tourism-services-destination-management.html',
//                     'tourism-services-icons-grid.html',
//                     'tourism-services-image-grid-sidebar.html',
//                     'tourism-services-image-grid.html',
//                     'tourism-services-marketing.html',
//                     'tourism-services-partnership.html',
//                     'tourism-services-seminars.html',
//                     'tourism-services-single.html',
//                     'tourism-services-subcategory.html',
//                     'tourism-services-tourism-impacts.html',
//                     'tourism-services-training-and-education.html',
//                     'tourism-services-workforce-development.html',
//                     'tourism-team-ashley-valdez.html',
//                     'tourism-team-brandon-lucas.html',
//                     'tourism-team-member.html',
//                     'tourism-team-patrick-murray.html',
//                     'tourism-testimonials.html'
//                 ],
//                 match: "<!-- .main-nav start -->"
//             }
//         }
//
//
//     });
//
//     grunt.loadNpmTasks('grunt-dom-munger');
//     grunt.loadNpmTasks('grunt-insert');
//     //grunt.registerTask('default', ['insert']);
// };
