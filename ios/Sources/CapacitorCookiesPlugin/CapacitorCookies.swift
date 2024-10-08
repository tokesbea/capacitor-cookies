import Foundation

@objc public class CapacitorCookies: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
