package com.rndemo.react_module;

import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by xubinggui on 1/3/16.
 */
public class MyToastReactPackage extends MainReactPackage{

    @Override public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MyToastModule(reactContext));
        return modules;
    }

    @Override public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }
}
