const COMMANDS: &[&str] = &["ping", "get_status_bar_height", "get_nav_bar_height"];

fn main() {
  tauri_plugin::Builder::new(COMMANDS)
    .android_path("android")
    .ios_path("ios")
    .build();
}
