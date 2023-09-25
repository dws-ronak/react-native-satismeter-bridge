
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSatismeterBridgeSpec.h"

@interface SatismeterBridge : NSObject <NativeSatismeterBridgeSpec>
#else
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface SatismeterBridge : NSObject <RCTBridgeModule>
#endif

@end

