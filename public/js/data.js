(function(){
  var courses = [{ name: "Marketing in a Digital World",
              link: "https://www.coursera.org/learn/marketing-digital",
              text: "This course will examine how digital tools, such as the Internet, smartphones, and 3D printing, are revolutionizing the world of marketing by shifting the balance of power from firms to consumers.",
              image: "../images/digitalmarketer_digitalworld.jpeg"
            },
            { name: "Digital Branding and Engagement",
              link: "https://www.coursera.org/learn/marketing-digital",
              text: "This course will examine how digital tools, such as the Internet, smartphones, and 3D printing, are revolutionizing the world of marketing by shifting the balance of power from firms to consumers.",
              image: "../images/digitalmarketer_digitalworld.jpeg"
            },
            { name: "Introduction to Search Engine Optimization",
              link: "https://www.coursera.org/learn/marketing-digital",
              text: "This course will examine how digital tools, such as the Internet, smartphones, and 3D printing, are revolutionizing the world of marketing by shifting the balance of power from firms to consumers.",
              image: "../images/digitalmarketer_digitalworld.jpeg"
            },
            { name: "Marketing Fundamentals: Who Is Your Customer?",
              link: "https://www.coursera.org/learn/marketing-digital",
              text: "This course will examine how digital tools, such as the Internet, smartphones, and 3D printing, are revolutionizing the world of marketing by shifting the balance of power from firms to consumers.",
              image: "../images/digitalmarketer_digitalworld.jpeg"
            }
          ];


  var app = angular.module('List', []);

  app.controller('CatalogController', function(){
      this.course = courses;
    });

})();
