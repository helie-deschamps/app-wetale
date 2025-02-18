package com.plugin.utils

import android.app.Activity
import android.os.Build
import android.view.WindowInsets
import app.tauri.annotation.Command
import app.tauri.annotation.InvokeArg
import app.tauri.annotation.TauriPlugin
import app.tauri.plugin.JSObject
import app.tauri.plugin.Plugin
import app.tauri.plugin.Invoke

@InvokeArg
class PingArgs {
  var value: String? = null
}

@TauriPlugin
class ExamplePlugin(private val activity: Activity): Plugin(activity) {
    private val implementation = Example()

    @Command
    fun ping(invoke: Invoke) {
        val args = invoke.parseArgs(PingArgs::class.java)

        val ret = JSObject()
        ret.put("value", implementation.pong(args.value ?: "default value :("))
        invoke.resolve(ret)
    }

    @Command
    fun getStatusBarHeight(invoke: Invoke) {
        val height = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            val insets = activity.window.decorView.rootWindowInsets
            insets?.getInsets(WindowInsets.Type.statusBars())?.top ?: 0
        } else {
            val resourceId = activity.resources.getIdentifier("status_bar_height", "dimen", "android")
            if (resourceId > 0) activity.resources.getDimensionPixelSize(resourceId) else 0
        }

        val ret = JSObject()
        ret.put("height", height)
        invoke.resolve(ret)
    }

    @Command
    fun getNavBarHeight(invoke: Invoke) {
        val height = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            val insets = activity.window.decorView.rootWindowInsets
            insets?.getInsets(WindowInsets.Type.navigationBars())?.bottom ?: 0
        } else {
            val resourceId = activity.resources.getIdentifier("navigation_bar_height", "dimen", "android")
            if (resourceId > 0) activity.resources.getDimensionPixelSize(resourceId) else 0
        }

        val ret = JSObject()
        ret.put("height", height)
        invoke.resolve(ret)
    }
}
