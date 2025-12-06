"use client";

import { motion, useAnimate, useInView } from "motion/react";
import React from "react";
import { useIsMobile } from "~/app/_hooks/use-mobile";
import { cn } from "~/utils/cn";

const collections: {
  Category: string;
  Department: string;
  barcode: string;
  ID: string;
}[] = [
  {
    Category: "Sweaters",
    Department: "Sweaters",
    barcode: "Sweaters",
    ID: "3397fecdedb1",
  },
  {
    Category: "Pants",
    Department: "Pants",
    barcode: "Pants",
    ID: "2224gabjger4",
  },
  {
    Category: "T-shirts",
    Department: "T-shirts",
    barcode: "T-shirts",
    ID: "5689fdoerre2",
  },
  {
    Category: "Shoes",
    Department: "Shoes",
    barcode: "Shoes",
    ID: "5689fdoerre2",
  },
  {
    Category: "Accessories",
    Department: "Accessories",
    barcode: "Accessories",
    ID: "5689fdoerre2",
  },
] as const;

const [collectionKeys] = collections.map((collection) =>
  Object.keys(collection),
);

const products = [
  {
    ID: 3397,
    name: "Turtlenecks",
    barcode: "TRTL",
  },
  {
    ID: 2224,
    name: "Pullovers",
    barcode: "PLOV",
  },
  {
    ID: 5689,
    name: "Zip-up",
    barcode: "ZPUP",
  },
] as const;

const keys = Object.keys(products[0]);

export default function TechnicalBlueprint() {
  const isMobile = useIsMobile();
  const id = React.useId();

  const [shouldAnimate, setShouldAnimate] = React.useState<boolean>(false);
  const [scopeContainer] = useAnimate();
  const [tableScope, tableAnimate] = useAnimate();

  const isInView = useInView(scopeContainer, { amount: "all" });

  const animationStart = () => {
    tableAnimate(
      tableScope.current,
      {
        x: [12, -5],
        y: [12, -5],
      },
      {
        type: "spring",
        bounce: 0.3,
        duration: 0.35,
      },
    );
    setShouldAnimate(true);
  };
  const animationExit = () => {
    tableAnimate(
      tableScope.current,
      {
        x: [-5, 12],
        y: [-5, 12],
      },
      {
        type: "spring",
        bounce: 0.3,
        duration: 0.35,
      },
    );
    setShouldAnimate(false);
  };

  React.useEffect(() => {
    if (!isMobile) return;
    if (isInView) {
      animationStart();
    } else {
      animationExit();
    }
  }, [isInView, isMobile]);

  return (
    <motion.div
      className="group border-border/50 from-background/20 via-background/8 to-background/5 relative col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-linear-to-br p-2 shadow-[inset_0_1px_2px_#ffffff50,0_2px_4px_#00000030] saturate-150 backdrop-blur-sm md:col-span-6 lg:col-span-4"
      ref={scopeContainer}
      onHoverStart={() => {
        if (isMobile) return;
        animationStart();
      }}
      onHoverEnd={() => {
        if (isMobile) return;
        animationExit();
      }}
    >
      {/* spotlight */}
      <div className="group-hover:bg-primary/30 absolute -right-[50%] -bottom-10 h-16 w-full blur-2xl transition-all duration-500 ease-in-out group-hover:-bottom-6" />
      {/* showcase */}
      <div className="relative mt-auto mb-0 flex h-85 max-h-85 flex-1 flex-col overflow-hidden rounded-xl bg-neutral-200/20 px-8 shadow-lg dark:bg-[#161618]/20 dark:shadow-white/10">
        {/* back */}
        <div className="bg-muted mt-6 flex aspect-4/2 w-full min-w-[450px] flex-col overflow-clip rounded-2xl border mask-b-from-60% mask-b-to-100% shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md md:mt-12">
          <h3 className="px-3 py-2 text-sm">Products</h3>
          <div className="mx-1 mt-auto mb-1 flex-1 rounded-xl border">
            <table className="table w-full p-2.5">
              <thead>
                <tr className="w-full border-b text-xs font-normal tracking-tight">
                  {collectionKeys!.map((heading) => (
                    <th
                      key={`${id}-${heading}`}
                      className="bg-background dark:bg-background p-2 text-left first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl"
                    >
                      <span className="inline">{heading}</span>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline h-lh"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.00005 2.8999C8.21222 2.8999 8.41571 2.98419 8.56573 3.13422L10.9657 5.53422C11.2782 5.84664 11.2782 6.35317 10.9657 6.66559C10.6533 6.97801 10.1468 6.97801 9.83436 6.66559L8.00005 4.83127L6.16573 6.66559C5.85331 6.97801 5.34678 6.97801 5.03436 6.66559C4.72194 6.35317 4.72194 5.84664 5.03436 5.53422L7.43436 3.13422C7.58439 2.98419 7.78788 2.8999 8.00005 2.8999ZM5.03436 10.3342C5.34678 10.0218 5.85331 10.0218 6.16573 10.3342L8.00005 12.1685L9.83436 10.3342C10.1468 10.0218 10.6533 10.0218 10.9657 10.3342C11.2782 10.6466 11.2782 11.1532 10.9657 11.4656L8.56573 13.8656C8.25331 14.178 7.74678 14.178 7.43436 13.8656L5.03436 11.4656C4.72194 11.1532 4.72194 10.6466 5.03436 10.3342Z"
                          fill="#6C6C71"
                        />
                      </svg>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-smooth divide-y text-xs">
                {collections.map((collection, c) => {
                  const isSweaters = collection.Category === "Sweaters";
                  return (
                    <tr
                      key={`${id}-collection-${c}`}
                      className={cn(
                        "bg-background dark:bg-background transition-colors",
                        {
                          "bg-primary/10 dark:bg-primary/10":
                            isSweaters && shouldAnimate,
                        },
                      )}
                    >
                      {Object.values(collection).map((item, i) => {
                        const isLastProduct = c === products.length - 1;
                        const isLastItem =
                          i === Object.values(collection).length - 1;
                        return (
                          <td
                            key={`${id}-collection-item-${i}`}
                            className={cn("p-2.5 text-left", {
                              "rounded-bl-xl": isLastProduct && i === 0,
                              "rounded-br-xl": isLastProduct && isLastItem,
                            })}
                          >
                            {isLastItem ? (
                              <span className="bg-greyscale-900 rounded-md border p-1.5">
                                <svg
                                  width="17"
                                  height="17"
                                  viewBox="0 0 17 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="inline"
                                >
                                  <path
                                    d="M5.84978 7.6999C5.84978 6.81625 6.56613 6.0999 7.44978 6.0999H12.2498C13.1334 6.0999 13.8498 6.81625 13.8498 7.6999V12.4999C13.8498 13.3836 13.1334 14.0999 12.2498 14.0999H7.44978C6.56613 14.0999 5.84978 13.3836 5.84978 12.4999V7.6999Z"
                                    fill="#C3C3C6"
                                  />
                                  <path
                                    d="M4.24978 2.8999C3.36612 2.8999 2.64978 3.61625 2.64978 4.4999V9.2999C2.64978 10.1836 3.36612 10.8999 4.24978 10.8999L4.24978 4.4999H10.6498C10.6498 3.61625 9.93344 2.8999 9.04978 2.8999H4.24978Z"
                                    fill="#C3C3C6"
                                  />
                                </svg>
                                ...{item}
                              </span>
                            ) : (
                              item
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* front */}
        <div className="mt-0 mb-auto flex h-full w-full flex-col gap-8">
          <div
            className={cn(
              "bg-muted absolute right-8 bottom-8 flex aspect-4/2 flex-col rounded-2xl border shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md md:min-w-[275px]",
            )}
            style={{
              transform: "translateY(12px) translateX(12px)",
            }}
            ref={tableScope}
          >
            <h3 className="px-3 py-2 text-sm">Sweaters</h3>
            <div className="mx-1 mt-auto mb-1 flex-1 rounded-xl border">
              <table className="table w-full p-2.5">
                <thead>
                  <tr className="w-full border-b text-xs font-normal">
                    {keys.map((key) => (
                      <th
                        key={`${id}-keys-${key}`}
                        className="bg-background dark:bg-background p-2 text-left first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl"
                      >
                        <span className="inline">{key}</span>
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline h-lh"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.00005 2.8999C8.21222 2.8999 8.41571 2.98419 8.56573 3.13422L10.9657 5.53422C11.2782 5.84664 11.2782 6.35317 10.9657 6.66559C10.6533 6.97801 10.1468 6.97801 9.83436 6.66559L8.00005 4.83127L6.16573 6.66559C5.85331 6.97801 5.34678 6.97801 5.03436 6.66559C4.72194 6.35317 4.72194 5.84664 5.03436 5.53422L7.43436 3.13422C7.58439 2.98419 7.78788 2.8999 8.00005 2.8999ZM5.03436 10.3342C5.34678 10.0218 5.85331 10.0218 6.16573 10.3342L8.00005 12.1685L9.83436 10.3342C10.1468 10.0218 10.6533 10.0218 10.9657 10.3342C11.2782 10.6466 11.2782 11.1532 10.9657 11.4656L8.56573 13.8656C8.25331 14.178 7.74678 14.178 7.43436 13.8656L5.03436 11.4656C4.72194 11.1532 4.72194 10.6466 5.03436 10.3342Z"
                            fill="#6C6C71"
                          />
                        </svg>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-smooth divide-y text-xs">
                  {products.map((product, p) => (
                    <tr key={`${id}-product-${p}`}>
                      {Object.values(product).map((item, i) => {
                        const isLastProduct = p === products.length - 1;
                        const isLastItem =
                          i === Object.values(product).length - 1;
                        return (
                          <td
                            key={`${id}-product-item-${i}`}
                            className={cn(
                              "bg-background dark:bg-background p-2.5 text-left",
                              {
                                "rounded-bl-xl": isLastProduct && i === 0,
                                "rounded-br-xl": isLastProduct && isLastItem,
                              },
                            )}
                          >
                            {item}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* text */}
      <div className="p-4">
        <span className="text-foreground text-lg">Technical Blueprint</span>
        <p className="text-muted-foreground font-extralight">
          Render system schematics for better collaboration and visualization.
        </p>
      </div>
    </motion.div>
  );
}
