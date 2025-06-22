use axum::{Json};
use crate::models::user::User;
use crate::views::user_view;

pub async fn get_user() -> Json<serde_json::Value> {
    // Simulando busca no banco
    let user = User {
        id: 1,
        username: \"reinanbr\".to_string(),
        email: \"reinan@example.com\".to_string(),
    };

    Json(user_view::render_user(&user))
}
