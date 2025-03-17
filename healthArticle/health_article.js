var xhr = new XMLHttpRequest();

//Set URL
var url = './health_article.json';

// You asked for data using xhr.open('GET', url, true);
// to prepare to receive data in a specific format 
// (xhr.responseType = 'json';).
xhr.open('GET', url, true);

// Set response type
xhr.responseType = 'json';

xhr.onload = function() { 
    // Retrieve articles array from JSON response
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    /*  For each article, 
 you created webpage parts like title descriptions 
 and filled them with data. */
articles.forEach(function(article) {

    var articleDiv = document.createElement('div');
    // Populate these HTML elements with corresponding content 
    // from the fetched JSON data:
    articleDiv.classList.add('article');

    // Create title element
    var title = document.createElement('h2');
    title.textContent = article.title;

    // Create description element
    var description = document.createElement('p');
    description.textContent = article.description;

    // Create ways Header element
    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    // Create list of wats to achieve
    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
    var listItem = document.createElement('li');
    listItem.textContent = way;
    // add to ways list
    waysList.appendChild(listItem);
    });
    // benefits header
    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    // 
    var benefitsList = document.createElement('ul');
    // Cycle through benefits list
    article.benefits.forEach(function(benefit) {
    var listItem = document.createElement('li');
    listItem.textContent = benefit;
    benefitsList.appendChild(listItem);
    });
    
    // You then fetched these parts on the webpage
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
});
}



//  and sent the request to get the data 
xhr.send();