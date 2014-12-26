angular-touch-meteor
====================

The angular meteor library with https://github.com/angular/angular.js/pull/8256 applied manually by replacing the $swipe directive completely. Without this fix the swipe doesn't continue if you swipe outside the element that initiated the swipe and thus makes swiping smaller elements or elements that grow and shrink based on the swipe completely useless.
