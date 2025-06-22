use crate::models::user::User;
use serde_json::{json, Value};

pub fn render_user(user: &User) -> Value {
    json!({
        \"user\": {
            \"id\": user.id,
            \"username\": user.username,
            \"email\": user.email,
        }
    })
}
