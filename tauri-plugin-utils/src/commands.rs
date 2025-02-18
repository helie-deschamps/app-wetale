use tauri::{AppHandle, command, Runtime};

use crate::models::*;
use crate::Result;
use crate::UtilsExt;

#[command]
pub(crate) async fn ping<R: Runtime>(
    app: AppHandle<R>,
    payload: PingRequest,
) -> Result<PingResponse> {
    app.utils().ping(payload)
}

#[command]
pub(crate) async fn get_status_bar_height<R: Runtime>(
    app: AppHandle<R>,
) -> Result<GetStatusBarHeightResponse> {
    app.utils().get_status_bar_height()
}

#[command]
pub(crate) async fn get_nav_bar_height<R: Runtime>(
    app: AppHandle<R>,
) -> Result<GetNavBarHeightResponse> {
    app.utils().get_nav_bar_height()
}
