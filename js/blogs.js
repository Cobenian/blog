$( document ).ready(function() {

  console.log("I am loaded");

  function getUrlParameter(sParam)
  {
      var locationHash = document.location.hash;
      var sURLVariables;
      if (locationHash !== undefined )
      {
        sURLVariables = locationHash.substring(2).split('&');
      }
      else
      {
        var sPageURL = window.location.search.substring(1);
        sURLVariables = sPageURL.split('&');
      }
      for (var i = 0; i < sURLVariables.length; i++)
      {
          var sParameterName = sURLVariables[i].split('=');
          var paramName = decodeURIComponent(sParameterName[0]);
          if (paramName == sParam)
          {
              return decodeURIComponent(sParameterName[1]);
          }
      }
  }

  function getBlogByName(blog)
  {
    if ( blog !== undefined )
    {
      for ( var i = 0; i < blogs.length; i++ ) {
        var blogName = blogs[i];
        if ( blogName === blog) {
          return 'blog_' + i;
        }
      }
    }
  }

  function loadBlog(blogName)
  {
    if ( blogName !== undefined )
    {
      $('.blog-post').hide();
      $('.' + blogName).show();
    }
  }

  var blogs = [
  'Secure Route Origination',
  'Slides from DevIgnition',
  'Speaking at NoVA Networkers',
  'RPKI at Mozilla',
  'Slides from NoVA Networkers',
  'Cobenian at NANOG 57',
  'Proud Sponsor of Monitorama',
  'Proud Sponsor of Clojure Conj',
  'Cobenian Turns 1 Year Old',
  'Proud Sponsor of PyTennessee',
  'Proud Sponsor of Gophercon',
  'Speaking at BigConf',
  'RRDP Draft RFC',
  'NoVA Elixir Meetup',
  'Introducing demoit.io',
  'Elixir Mastery class May 28-29',
  'Why is Elixir pattern matching special?',
  'Handing over a self contained Elixir program',
  'Increasing Diversity in the Elixir Community',
  'Building an Elixir library - Part 1',
  '10th Anniversary!'
  ];

  showBlog = function()
  {
    $('.blog-post').hide();
    var blog = getUrlParameter('blog');
    var blogName = getBlogByName(blog);
    if ( blogName === undefined )
    {
      blogName = 'blog_' + (blogs.length -1);
    }
    loadBlog(blogName);
  }

  $('.blog-link').click(function(event) {
    event.preventDefault();
    var blog = $(this).text();
    var blogName = getBlogByName(blog);
    if ( blogName === undefined )
    {
      blogName = 'blog_' + (blogs.length -1);
    }
    loadBlog(blogName);
  });

  showBlog();

});
