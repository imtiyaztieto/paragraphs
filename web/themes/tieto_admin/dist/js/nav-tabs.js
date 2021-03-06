(function (exports) {
'use strict';

/**
 * @file
 * Responsive navigation tabs.
 *
 * This also supports collapsible navigable is the 'is-collapsible' class is
 * added to the main element, and a target element is included.
 */

(function ($, Drupal) {

  function init(i, tab) {
    var $tab = $(tab);
    var $target = $tab.find('[data-drupal-nav-tabs-target]');
    var isCollapsible = $tab.hasClass('is-collapsible');

    function openMenu(e) {
      $target.toggleClass('is-open');
    }

    function handleResize(e) {
      $tab.addClass('is-horizontal');
      var $tabs = $tab.find('.tabs');
      var isHorizontal = $tabs.outerHeight() <= $tabs.find('.tabs__tab').outerHeight();
      $tab.toggleClass('is-horizontal', isHorizontal);
      if (isCollapsible) {
        $tab.toggleClass('is-collapse-enabled', !isHorizontal);
      }
      if (isHorizontal) {
        $target.removeClass('is-open');
      }
    }

    $tab.addClass('position-container is-horizontal-enabled');

    $tab.on('click.tabs', '[data-drupal-nav-tabs-trigger]', openMenu);
    $(window).on('resize.tabs', Drupal.debounce(handleResize, 150)).trigger('resize.tabs');
  }

  /**
   * Initialise the tabs JS.
   */
  Drupal.behaviors.navTabs = {
    attach: function (context, settings) {
      var $tabs = $(context).find('[data-drupal-nav-tabs]');
      if ($tabs.length) {
        var notSmartPhone = window.matchMedia('(min-width: 300px)');
        if (notSmartPhone.matches) {
          $tabs.once('nav-tabs').each(init);
        }
      }
    }
  };

})(jQuery, Drupal);

}((this.LaravelElixirBundle = this.LaravelElixirBundle || {})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi92YXIvd3d3L3BhcmFncmFwaHMubG9jYWwvd2ViL3RoZW1lcy90aWV0b19hZG1pbi9zcmMvc2NyaXB0cy9uYXYtdGFicy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBSZXNwb25zaXZlIG5hdmlnYXRpb24gdGFicy5cbiAqXG4gKiBUaGlzIGFsc28gc3VwcG9ydHMgY29sbGFwc2libGUgbmF2aWdhYmxlIGlzIHRoZSAnaXMtY29sbGFwc2libGUnIGNsYXNzIGlzXG4gKiBhZGRlZCB0byB0aGUgbWFpbiBlbGVtZW50LCBhbmQgYSB0YXJnZXQgZWxlbWVudCBpcyBpbmNsdWRlZC5cbiAqL1xuXG4oZnVuY3Rpb24gKCQsIERydXBhbCkge1xuXG4gIGZ1bmN0aW9uIGluaXQoaSwgdGFiKSB7XG4gICAgdmFyICR0YWIgPSAkKHRhYik7XG4gICAgdmFyICR0YXJnZXQgPSAkdGFiLmZpbmQoJ1tkYXRhLWRydXBhbC1uYXYtdGFicy10YXJnZXRdJyk7XG4gICAgdmFyIGlzQ29sbGFwc2libGUgPSAkdGFiLmhhc0NsYXNzKCdpcy1jb2xsYXBzaWJsZScpO1xuXG4gICAgZnVuY3Rpb24gb3Blbk1lbnUoZSkge1xuICAgICAgJHRhcmdldC50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZShlKSB7XG4gICAgICAkdGFiLmFkZENsYXNzKCdpcy1ob3Jpem9udGFsJyk7XG4gICAgICB2YXIgJHRhYnMgPSAkdGFiLmZpbmQoJy50YWJzJyk7XG4gICAgICB2YXIgaXNIb3Jpem9udGFsID0gJHRhYnMub3V0ZXJIZWlnaHQoKSA8PSAkdGFicy5maW5kKCcudGFic19fdGFiJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICR0YWIudG9nZ2xlQ2xhc3MoJ2lzLWhvcml6b250YWwnLCBpc0hvcml6b250YWwpO1xuICAgICAgaWYgKGlzQ29sbGFwc2libGUpIHtcbiAgICAgICAgJHRhYi50b2dnbGVDbGFzcygnaXMtY29sbGFwc2UtZW5hYmxlZCcsICFpc0hvcml6b250YWwpO1xuICAgICAgfVxuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHRhYi5hZGRDbGFzcygncG9zaXRpb24tY29udGFpbmVyIGlzLWhvcml6b250YWwtZW5hYmxlZCcpO1xuXG4gICAgJHRhYi5vbignY2xpY2sudGFicycsICdbZGF0YS1kcnVwYWwtbmF2LXRhYnMtdHJpZ2dlcl0nLCBvcGVuTWVudSk7XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUudGFicycsIERydXBhbC5kZWJvdW5jZShoYW5kbGVSZXNpemUsIDE1MCkpLnRyaWdnZXIoJ3Jlc2l6ZS50YWJzJyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGlzZSB0aGUgdGFicyBKUy5cbiAgICovXG4gIERydXBhbC5iZWhhdmlvcnMubmF2VGFicyA9IHtcbiAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuICAgICAgdmFyICR0YWJzID0gJChjb250ZXh0KS5maW5kKCdbZGF0YS1kcnVwYWwtbmF2LXRhYnNdJyk7XG4gICAgICBpZiAoJHRhYnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBub3RTbWFydFBob25lID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDMwMHB4KScpO1xuICAgICAgICBpZiAobm90U21hcnRQaG9uZS5tYXRjaGVzKSB7XG4gICAgICAgICAgJHRhYnMub25jZSgnbmF2LXRhYnMnKS5lYWNoKGluaXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG59KShqUXVlcnksIERydXBhbCk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7O0FBUUEsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUU7O0VBRXBCLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUN6RCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0lBRXBELFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtNQUNuQixPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2hDOztJQUVELFNBQVMsWUFBWSxDQUFDLENBQUMsRUFBRTtNQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO01BQy9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDL0IsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7TUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7TUFDaEQsSUFBSSxhQUFhLEVBQUU7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO09BQ3hEO01BQ0QsSUFBSSxZQUFZLEVBQUU7UUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUNoQztLQUNGOztJQUVELElBQUksQ0FBQyxRQUFRLENBQUMsMENBQTBDLENBQUMsQ0FBQzs7SUFFMUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDeEY7Ozs7O0VBS0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUc7SUFDekIsTUFBTSxFQUFFLFVBQVUsT0FBTyxFQUFFLFFBQVEsRUFBRTtNQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7TUFDdEQsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hCLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1RCxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUU7VUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7T0FDRjtLQUNGO0dBQ0YsQ0FBQzs7Q0FFSCxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzsifQ==