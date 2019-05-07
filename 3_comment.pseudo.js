// Comment page that shows comments nested up to 5 deep. Comments should be ordered from newest to oldest, as should replies (within the scope of the comment they're replying to)

// Eg:
// - Comment
//   - Reply to Comment
//     - Reply to above reply
//       - 3rd-level reply
//         - 4th-level reply
//           - [Click here for more replies]
//       - 2nd 3rd-level reply
//   - 2nd Reply
// - 2nd comment
//   - Reply to 2nd comment
//     - 3rd-level reply
//   - 2nd Reply to 2nd comment

class Comment

  // You can assume `post_id` is sanitized
  def show_comments(post_id)

    // I don't know what to do! Maybe get data from a `comments` table? It has these fields:
    //   * id
    //   * post_id
    //   * parent_comment_id
    //   * user_id
    //   * comment_content
    //   * posted_at

    // ...

    // But after that I'm lost

    // ...

    // All I know is, after I get the data & arrange it correctly, I want to render it with:
   render_comments(nested_comments) // Takes a text string in the format given under `Eg:` at the top of this page
 end
end
