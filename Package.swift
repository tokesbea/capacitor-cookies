// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCookiesPlugin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorCookiesPlugin",
            targets: ["CapacitorCookiesPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorCookiesPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorCookiesPlugin"),
        .testTarget(
            name: "CapacitorCookiesPluginTests",
            dependencies: ["CapacitorCookiesPlugin"],
            path: "ios/Tests/CapacitorCookiesPluginTests")
    ]
)