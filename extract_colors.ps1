Add-Type -AssemblyName System.Drawing

function Get-DominantColors {
    param (
        [string]$imagePath,
        [int]$maxColors = 5
    )

    try {
        $image = [System.Drawing.Bitmap]::FromFile($imagePath)
        $colors = @{}

        # Sample pixels (every 10th pixel to save time)
        for ($x = 0; $x -lt $image.Width; $x += 10) {
            for ($y = 0; $y -lt $image.Height; $y += 10) {
                $pixel = $image.GetPixel($x, $y)
                if ($pixel.A -gt 0) { # Ignore transparent pixels
                    $key = "$($pixel.R),$($pixel.G),$($pixel.B)"
                    if ($colors.ContainsKey($key)) {
                        $colors[$key]++
                    } else {
                        $colors[$key] = 1
                    }
                }
            }
        }

        $sortedColors = $colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First $maxColors

        Write-Host "Dominant Colors:"
        foreach ($color in $sortedColors) {
            $rgb = $color.Key.Split(',')
            $hex = "#{0:X2}{1:X2}{2:X2}" -f [int]$rgb[0], [int]$rgb[1], [int]$rgb[2]
            Write-Host "RGB: $($color.Key) - Hex: $hex - Count: $($color.Value)"
        }
    }
    catch {
        Write-Host "Error: $_"
    }
    finally {
        if ($image) {
            $image.Dispose()
        }
    }
}

$imagePath = "C:\Users\marcl\.gemini\antigravity\brain\15885e9b-a586-43c5-9994-25dad984a087\uploaded_media_1769475389768.png"
Get-DominantColors -imagePath $imagePath
