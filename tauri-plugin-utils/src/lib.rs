use tauri::{
  plugin::{Builder, TauriPlugin},
  Manager, Runtime,
};

pub use models::*;

#[cfg(desktop)]
mod desktop;
#[cfg(mobile)]
mod mobile;

mod commands;
mod error;
mod models;

pub use error::{Error, Result};

#[cfg(desktop)]
use desktop::Utils;
#[cfg(mobile)]
use mobile::Utils;

/// Extensions to [`tauri::App`], [`tauri::AppHandle`] and [`tauri::Window`] to access the utils APIs.
pub trait UtilsExt<R: Runtime> {
  fn utils(&self) -> &Utils<R>;
}

impl<R: Runtime, T: Manager<R>> crate::UtilsExt<R> for T {
  fn utils(&self) -> &Utils<R> {
    self.state::<Utils<R>>().inner()
  }
}

/// Initializes the plugin.
pub fn init<R: Runtime>() -> TauriPlugin<R> {
  Builder::new("utils")
    .invoke_handler(tauri::generate_handler![
        commands::ping,
        commands::get_status_bar_height,
        commands::get_nav_bar_height
    ])
    .setup(|app, api| {
      #[cfg(mobile)]
      let utils = mobile::init(app, api)?;
      #[cfg(desktop)]
      let utils = desktop::init(app, api)?;
      app.manage(utils);
      Ok(())
    })
    .build()
}
