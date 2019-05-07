class Post

  // Render the content of a blog post
  // (You can assume post_id and user are sanitized)
  function show_post(post_id, user)

    posts = SqlDatabase.query("SELECT * FROM posts WHERE id={post_id}")
    post = posts[0]

    user_privileges = user.role.privileges.post_privileges

    // You can assume `check_privileges` takes a user privilege, record, and requested permission
    // It returns true if user has sufficient permissions, false otherwise
    is_editable = check_privileges(user_privileges, post, :editable)

    case post.status {
      when 'Deleted' {
        redirect_to('404.html', status: 404)
        return
      } when 'Draft' {
        redirect_to('404.html', status: 404)
        return
      } when null {
        redirect_to('404.html', status: 404)
        return
      }
    }

    reactions = SqlDatabase.query("SELECT * FROM reactions WHERE post_id={post.id}")

    reaction_outputs = new Dictionary{}

    for (i = 0; i < reactions.length; i++) {
      switch reactions[i].type {
        case 'Liked' {
          reaction_outputs{'Liked'} ||= 0
          reaction_outputs{'Liked'} = reaction_outputs + 1
        }
        case 'Disliked' {
          reaction_outputs{'Disliked'} ||= 0
          reaction_outputs{'Disliked'} = reaction_outputs + 1
        }
        case 'Sad' {
          reaction_outputs{'Sad'} ||= 0
          reaction_outputs{'Sad'} = reaction_outputs + 1
        }
        case 'Angry' {
          reaction_outputs{'Angry'} ||= 0
          reaction_outputs{'Angry'} = reaction_outputs + 1
        }
        default {
          throw TypeError('A reaction was found with no type assigned. This should not be possible')
          return 'An error occurred and this page cannot be loaded'
        }
      }
    }

    render_post_template(post, reaction_outputs, is_editable) // You can assume `render_post_template` outputs a relevant & well-written view for a post & its associated reactions
  end
end
