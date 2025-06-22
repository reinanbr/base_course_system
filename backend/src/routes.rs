use axum::{Router, routing::get};
use crate::controllers::user_controller;

pub fn app_routes() -> Router {
    Router::new()
        .route(\"/api/user\", get(user_controller::get_user))
}
