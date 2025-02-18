use serde::de::DeserializeOwned;
use tauri::{plugin::PluginApi, AppHandle, Runtime};

use crate::models::*;

pub fn init<R: Runtime, C: DeserializeOwned>(
  app: &AppHandle<R>,
  _api: PluginApi<R, C>,
) -> crate::Result<Utils<R>> {
  Ok(Utils(app.clone()))
}

/// Access to the utils APIs.
pub struct Utils<R: Runtime>(AppHandle<R>);

impl<R: Runtime> Utils<R> {
  pub fn ping(&self, payload: PingRequest) -> crate::Result<PingResponse> {
    Ok(PingResponse {
      value: payload.value,
    })
  }

  pub fn get_status_bar_height(&self) -> crate::Result<GetStatusBarHeightResponse> {
    Ok(GetStatusBarHeightResponse {
      height: Some(0),
    })
  }

  pub fn get_nav_bar_height(&self) -> crate::Result<GetNavBarHeightResponse> {
    Ok(GetNavBarHeightResponse {
      height: Some(0),
    })
  }
}
