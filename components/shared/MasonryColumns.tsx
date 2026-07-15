"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface MasonryColumnsProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string;
  getAspectRatio: (item: T) => number;
  gap?: number;
  minColumnWidth?: number;
  minColumns?: number;
  maxColumns?: number;
}

// Real masonry: each item is assigned to whichever column is currently
// shortest (estimated from its aspect ratio at the measured column
// width), instead of CSS `columns-N`'s simpler "fill column 1 top to
// bottom, then column 2" behavior. This keeps every column's total
// height as close as possible, so there's no big empty gap under a
// short column while another runs long.
export default function MasonryColumns<T>({
  items,
  renderItem,
  getKey,
  getAspectRatio,
  gap = 12,
  minColumnWidth = 220,
  minColumns = 2,
  maxColumns = 6,
}: MasonryColumnsProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.offsetWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const columnCount = containerWidth
    ? Math.max(minColumns, Math.min(maxColumns, Math.round(containerWidth / minColumnWidth)))
    : minColumns;

  const columnWidth =
    columnCount > 0 ? (containerWidth - gap * (columnCount - 1)) / columnCount : 0;

  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);

  // Placing tallest items first ("largest first" bin-packing) gives a much
  // more even result than processing in the original array order: if
  // several tall items happen to sit together in the source list, a
  // naive shortest-column-wins pass clusters them into different columns
  // early while short items pile into whichever columns are left, so
  // some columns end up consistently shorter than others.
  const withHeights = items.map((item) => ({
    item,
    height: columnWidth > 0 ? columnWidth / (getAspectRatio(item) || 1) : 0,
  }));
  withHeights.sort((a, b) => b.height - a.height);

  for (const { item, height } of withHeights) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(item);
    heights[shortest] += height + gap;
  }

  return (
    <div ref={containerRef} className="flex" style={{ gap }}>
      {columns.map((column, i) => (
        <div key={i} className="flex flex-1 flex-col" style={{ gap }}>
          {column.map((item) => (
            <div key={getKey(item)}>{renderItem(item)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
