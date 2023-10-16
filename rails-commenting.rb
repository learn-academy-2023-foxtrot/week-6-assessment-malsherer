# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller is used to store methods and manage data and behavior within a rails app.
class BlogPostsController < ApplicationController
  def index
    # ---2) The index method is used to return multiple models.
    @posts = BlogPost.all
  end

  # ---3) Show creates a method that will be able to find and display a specific blog post by its ID.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The New method displays a form in which the user can input hte necessary data to create a new blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create method creates a new post based on the data previously entered and redirects to the new post if it is valid (contains all necessary data)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The edit method creates a form to input the data to edit a blog post that already exists. The param entered is the ID of the post that needs to be edited.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Like create, update implements the edits previously entered if they are valid, and redirects to the newly edited post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) The destroy method deletes an existing post. The param required is the ID of the post to be deleted.
      redirect_to blog_posts_path
    end
  end

  # ---9) Using the private keyword means that this part of the code can only be accessed within the controller.
  private
  def blog_post_params
    # ---10) This method specifies which elements are safev to be updated within the model, as a security precaution.
    params.require(:blog_post).permit(:title, :content)
  end
end
