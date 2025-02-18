use serde::de::DeserializeOwned;
use tauri::{
  plugin::{PluginApi, PluginHandle},
  AppHandle, Runtime,
};

use crate::models::*;

#[cfg(target_os = "ios")]
tauri::ios_plugin_binding!(init_plugin_utils);

// initializes the Kotlin or Swift plugin classes
pub fn init<R: Runtime, C: DeserializeOwned>(
  _app: &AppHandle<R>,
  api: PluginApi<R, C>,
) -> crate::Result<Utils<R>> {
  #[cfg(target_os = "android")]
  let handle = api.register_android_plugin("com.plugin.utils", "ExamplePlugin")?;
  #[cfg(target_os = "ios")]
  let handle = api.register_ios_plugin(init_plugin_utils)?;
  Ok(Utils(handle))
}

/// Access to the utils APIs.
pub struct Utils<R: Runtime>(PluginHandle<R>);

impl<R: Runtime> Utils<R> {
  pub fn ping(&self, payload: PingRequest) -> crate::Result<PingResponse> {
    self
      .0
      .run_mobile_plugin("ping", payload)
      .map_err(Into::into)
  }

  pub fn get_status_bar_height(&self) -> crate::Result<GetStatusBarHeightResponse> {
    self
        .0
        .run_mobile_plugin("getStatusBarHeight", ())
        .map_err(Into::into)
  }

  pub fn get_nav_bar_height(&self) -> crate::Result<GetNavBarHeightResponse> {
    self
        .0
        .run_mobile_plugin("getNavBarHeight", ())
        .map_err(Into::into)
  }
}
