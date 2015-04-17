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

  var blogs = ['Introducing demoit.io',
  'NoVA Elixir Meetup',
  'RRDP Draft RFC',
  'Speaking at BigConf',
  'Proud Sponsor of Gophercon',
  'Proud Sponsor of PyTennessee',
  'Cobenian Turns 1 Year Old',
  'Proud Sponsor of Clojure Conj',
  'Proud Sponsor of Monitorama',
  'Cobenian at NANOG 57',
  'Slides from NoVA Networkers',
  'RPKI at Mozilla',
  'Speaking at NoVA Networkers',
  'Slides from DevIgnition',
  'Lame DNS Testing',
  'Secure Route Origination',
  ];

  showBlog = function()
  {
    $('.blog-post').hide();
    var blog = getUrlParameter('blog');
    var blogName = getBlogByName(blog);
    if ( blogName === undefined )
    {
      blogName = 'blog_0';
    }
    loadBlog(blogName);
  }

  $('.blog-link').click(function(event) {
    event.preventDefault();
    var blog = $(this).text();
    var blogName = getBlogByName(blog);
    if ( blogName === undefined )
    {
      blogName = 'blog_0';
    }
    loadBlog(blogName);
  });

  showBlog();

});
