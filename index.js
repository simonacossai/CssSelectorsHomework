      /*  JS Exercises
        EX11) Write a function to add a new link into the navbar*/
        const addLink =(link)=>{
            let navbar= document.querySelector("nav");
            let newLink= document.createElement("a");
            newLink.innerText=link;
            newLink.classList.add("p-2");
            navbar.appendChild(newLink);
        }
       // EX12) Write a function to remove the "Search" magnifying glass icon
       const removeSearch =()=>{
           let search= document.querySelector("a svg");
           search.remove();
       }
       // EX13) Write a function to change the background of the jumbotron
       const changeJumbotronBackground=()=>{
           let jumbo = document.querySelector(".jumbotron");
        jumbo.style.backgroundImage = "url('https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png')";
       }

       // EX14) Write a function to change the color of the main title
       const changeTitleColor=(color)=>{
        let title = document.querySelector(".jumbotron h1");
        title.style.color= color;
       }
       // EX15) Write a function to change the column size for post headings
       const changeColumnSize=()=>{
           let column = document.querySelector(".blog-main");
           console.log(column);
           column.classList.remove("col-md-8");
           column.classList.add("col-md-4");
       }

       // EX16) Write a function to remove all the links under "Elsewhere"
       const deleteLinks=()=>{
        let links = document.querySelectorAll(".list-unstyled:not(.mb-0) li a")
      for(let i=0; i<links.length; i++){
          links[i].remove();
         }
       }
  
       // EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
       const trimPosts=()=>{
           let paragraphs = document.querySelectorAll(".blog-post p:nth-child(3)");
           let posts=[]
           for(i=0;i<paragraphs.length; i++){
            posts[i]=paragraphs[i].innerText.substring(50);
            paragraphs[i].innerText= posts[i]
           }
       }

       //EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
       const newBlogPost=()=>{
        let postTitle= document.createElement("h2");
        postTitle.classList.add("blog-post-title");
        postTitle.innerText= "i'm the new post";

        let postText= document.createElement("p");
        postText.innerText= ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Neque unde temporibus eum eos atque iste culpa debitis officia distinctio quia 
      magni assumenda aperiam aspernatur numquam ratione nam, autem expedita aut!` ;
                
       let postDiv = document.createElement("div");
       postDiv.classList.add("blog-post");
       let container = document.querySelector(".blog-main");
                postDiv.appendChild(postTitle);
                postDiv.appendChild(postText);
                console.log(postDiv);
                container.appendChild(postDiv);
       }
     

       //EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
       const removeLastPost=()=>{
           let lastPost= document.querySelector(".blog-post:last-of-type");
           lastPost.remove();
       }
       //EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
     
           let authors = document.querySelectorAll(".blog-post p.blog-post-meta a");
           for(let i=0; i<authors.length; i++){
            authors[i].addEventListener("mouseover", function(event){
                alert(event.target.innerText)
            });
       }