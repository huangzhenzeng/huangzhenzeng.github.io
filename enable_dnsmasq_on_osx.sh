# ----------------------
# installing dnsmasq and enable daemon
# ----------------------
brew install dnsmasq
sudo cp -v $(brew --prefix dnsmasq)/homebrew.mxcl.dnsmasq.plist /Library/LaunchDaemons
# ----------------------
# adding resolver for vbox domain
# ----------------------
[ -d /etc/resolver ] || sudo mkdir -v /etc/resolver
sudo bash -c 'echo "nameserver 127.0.0.1" > /etc/resolver/vbox'
# ----------------------
# configuring dnsmasq
# ----------------------
cat > $(brew --prefix)/etc/dnsmasq.conf <<-EOF
listen-address=192.168.1.101
listen-address=127.0.0.1
dhcp-range=192.168.1.100,192.168.1.200
domain=vbox,192.168.1.0/24,local
dhcp-leasefile=/var/lib/dnsmasq/dnsmasq.leases
# keep nameserver order of resolv.conf
strict-order
EOF
# ----------------------
# launching dnsmasq
# ----------------------
sudo launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist